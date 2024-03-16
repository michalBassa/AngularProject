import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

// ביטוי רגולרי לבדיקת סיסמה חזקה
const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+-={}|;:'",<.>/?])(?=.*\S).{8,}$/;

// פונקציית ValidatorFn המבצעת את הבדיקה
const passwordPatternValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    // בדיקת תקינות הסיסמה
    return control.value && !control.value.match(passwordRegEx)
      ? {
          invalidPassword: true, // הוספת הודעת שגיאה אם הסיסמה אינה תקינה
        }
      : null;
  };
};

// יצירת אובייקט המייצג את הודעת השגיאה
export const passwordValidator = passwordPatternValidator();
