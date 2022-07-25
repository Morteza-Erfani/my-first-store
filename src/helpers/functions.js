export const shorter = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
  return newTitle;
};

export const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((items) => items.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};
