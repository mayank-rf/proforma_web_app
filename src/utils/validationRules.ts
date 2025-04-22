export const getValidationRules = (
  type: 'text' | 'number' | 'textAndNumber'
) => ({
  required: 'This field is required',
  validate: (value: string) => {
    if (type === 'text' && /\d/.test(value)) {
      return 'Only letters allowed';
    }
    if (type === 'number' && !/^\d*\.?\d*$/.test(value)) {
      return 'Only numbers allowed';
    }
    if (type === 'textAndNumber' && !/^[a-zA-Z0-9\s]*$/.test(value)) {
      return 'Only letters and numbers allowed';
    }
    return true;
  },
});
