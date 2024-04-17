import { Component, DestroyRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './entities/components/dialog/dialog.component';
import {IGas} from './entities/interfaces/app.interface';
import { MatTable } from '@angular/material/table';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  /**
   * Заголовок для страницы
   * 
   * @public
   * @type {string}
   */
  public title = 'lab2_poddubnaya';
  /**
   * Массив столбцов таблицы
   * 
   * @type {string[]}
   */
  displayedColumns: string[] = ['name', 'date', 'variety', 'size', 'isFull', 'price','del'];
  /**
 * Создание массива объектов, который является источником
 * данных для таблицы
 * 
 * @public
 * @type {IGas[]}
 */
  public dataSource: IGas[] = [
    {
      name: 'Поддубная Яна Сергеевна',
      date: '01.04.2024',
      variety: 'Дизельное топливо',
      size: 10,
      isFull: false,
      price: '50',
    },
  ];
  /**
   * Объявление конструктора
   * 
   * @param {MatDialog} _dialog - сервис диалога 
   */
  constructor(
    private readonly _dialog: MatDialog,
    private readonly _destroyRef: DestroyRef
  ) { }
  /**
   * Получение ссылки на таблицу
   * 
   * @public
   */
  @ViewChild(MatTable) public table?: MatTable<IGas>
  /**
   * Открытие диалогового окна после нажатия на кнопку и сохранение данных
   * 
   * @method
   * @description открытие диалогового окна после нажатия на кнопку, сохранение 
   * данных в таблицу после отправки, отписка от события и обновление строк таблицы
   * @public
   * @return {void}
   */
  public openDialog(): void {
    const dialogRef = this._dialog.open(DialogComponent, {});
    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((result) => {
      if(result){
        this.dataSource.push(result);
      }
      this.table?.renderRows();
    });
  }
/**
 * Удаление строки из таблицы
 * 
 * @method
 * @param { IGas } row - строка таблицы 
 * @description создание нового массива, который будет состоять только из тех
 * элементов исходного массива, которые прошли проверку (не равны строке row),
 * обновление таблицы
 * @public
 * @type { IGas }
 */
  public deleteRow(row: IGas): void {
    this.dataSource = this.dataSource.filter(item => item!== row);
    this.table?.renderRows();
  }
}


