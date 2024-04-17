import { Injectable } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IGas } from 'src/app/entities/interfaces/app.interface';

@Injectable({
  providedIn: 'root',
})

export class DialogFormBuilderService {
  /**
   * Объявление конструктора
   * 
   * @param { FormBuilder } _fb 
   */
  constructor(private readonly _fb: FormBuilder) {}
/**
 * Создание форм группы
 * 
 * @method
 * @description создание группы форм 
 * @param { IGas } [data]   
 * @returns возвращает форм группу
 */
  public dialogFormBuilderService(data: IGas): FormGroup {
    return this._fb.group({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      variety: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      isFull: new FormControl(false, [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }
}
