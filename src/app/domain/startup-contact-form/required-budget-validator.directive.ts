/** Budget field should only be validated when the reason for contact is investor or consultant */
import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const requiredBudgetValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const budget = control.get('budget');
  const interest = control.get('interest');

  if (!budget || !interest) {
    return null;
  }

  const i = (interest.value as string).toLowerCase();

  if (i !== 'investor' && i !== 'consultant') {
    return null;
  }

  return !(budget.value as string) ? { 'required': true } : null;
};
