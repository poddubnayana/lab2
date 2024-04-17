/**
 * Интерфейс заправочной станции
 * 
 * @param { string } name - ФИО клиента
 * @param { string } date - дата заправки автомобиля
 * @param { string } variety - вид заливаемого топлива
 * @param { number } size - объем заливаемого топлива
 * @param { boolean } isFull - заливается полный бак или нет
 * @param { string } price - цена за литр заливаемого топлива
 */
export interface IGas {
    name: string;
    date: string;
    variety: string;
    size: number;
    isFull: boolean;
    price: string;
  }