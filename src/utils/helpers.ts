export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const capitalizeFirstLetterEveryWord = (str: string) => str.split(' ').map(capitalizeFirstLetter).join(' ');
