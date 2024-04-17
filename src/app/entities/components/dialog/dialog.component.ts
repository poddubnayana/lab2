import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { IGas } from 'src/app/entities/interfaces/app.interface';
import { DialogFormBuilderService } from './dialog.create-form';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})

export class DialogComponent {
    /**
   * Создание массива строк для заполнения выпадающего списка
   * @public
   * @type {string}
   */
  public fuel: string[] = [
    'Дизельное топливо',
    'Бензин-92',
    'Бензин-95',
    'Бензин-98',
  ];
  /**
   * Объявление форм группы gasForm
   * 
   * @public
   * @type {FormGroup}
   */
  public gasForm: FormGroup
  /**
   * Максимальная дата для выбора
   * 
   * @public
   * @type {Date}
   */
  public today = new Date(); 
  /**
   * Конструктор для диалогового окна
   * 
   * @constructor
   * @param {DialogFormBuilderService} _fb 
   * @param {MatDialogRef<DialogComponent>} _dialogRef 
   * @param {IGas} data 
   */
    constructor(
      private readonly _fb: DialogFormBuilderService,
      private readonly _dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: IGas
    ) {
      this.gasForm = this._fb.dialogFormBuilderService(data);
    }
    /**
     * Закрытие диалогового окна
     * 
     * @method
     * @description закрытие диалогового окна после нажатия на кнопку
     * @return {void}
     * @public
     */
    public closeDialog(): void{
      this._dialogRef.close(); 
    }
    /**
     * Запись значений из формы и закрытие диалогового окна
     * 
     * @method
     * @description запись значений формы в консоль, закрытие далогового окна и передача значений из формы
     * @return {void}
     * @public
     */
    public save(): void{
      this._dialogRef.close(this.gasForm.value); 
    }




  }
  







