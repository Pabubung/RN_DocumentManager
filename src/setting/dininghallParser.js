module.exports = {
  getDiningHallData(value) {
    const table1 = [];
    const table2 = [];
    value.table1.map(data => {
      table1.push({
        id: data.id,
        food_name: data.food_name,
        food_detail: data.food_detail,
        food_img: data.food_img,
        food_like: data.food_like,
        date: data.date,
        food_group: data.food_group,
      });
    });
    value.table2.map(data => {
      table2.push({
        id: data.id,
        snack_name: data.snack_name,
        snack_price: data.snack_price,
        snack_like: data.snack_like,
        snack_img: data.snack_img,
        snack_kalori: data.snack_kalori,
      });
    });
    const dininghall = {
      table1,
      table2,
    };
    return dininghall;
  },

  parseList(value) {
    const parseList = [];
    value.map(data => {
      parseList.push({
        value: data.name,
        id: data.id,
      });
    });
    return parseList;
  },
};
