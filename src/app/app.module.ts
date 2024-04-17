import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from './entities/components/dialog/dialog.component';
import { FormsModule,
         ReactiveFormsModule 
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { provideNgxMask, 
         NgxMaskPipe,
         NgxMaskDirective 
} from 'ngx-mask';

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    NgxMaskPipe,
    NgxMaskDirective,
  ],
  providers: [
    provideNgxMask(), 
    { provide: MAT_DATE_LOCALE, useValue: 'ru' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
