export const getValidationRules = (type: 'text' | 'number') => ({
  required: 'This field is required',
  validate: (value: string) => {
    if (type === 'text' && /\d/.test(value)) {
      return 'Only letters allowed';
    }
    if (type === 'number' && !/^\d*\.?\d*$/.test(value)) {
      return 'Only numbers allowed';
    }
    return true;
  },
});
