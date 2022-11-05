const icons = (label_name) => {
  const iconsList = {
    Paid: 'pi pi-dollar',
    Article: 'pi pi-book',
    Media: 'pi pi-video',
  };

  return iconsList[label_name];
};

export default icons;
