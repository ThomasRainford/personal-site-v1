// Function for setting first letter of string uppercase
export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// function for splitting string words seperated by hyphen and capitalizing.
export const splitAndCapitalize = (string: string) => {
  if (!string.includes("-")) return capitalize(string);
  const words = string.split("-");
  return words.map((word) => capitalize(word)).join(" + ");
};
