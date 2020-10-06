module.exports = {
    getEmployeeData(value) {
      const employeeCurrent = [];
  
      value.map((data) =>{
        employeeCurrent.push({
          id: data.id,
          name: data.name,
        })
      } )
      const eventList = {
        employeeCurrent
      }
      return eventList;
    },
  
    parseList(value) {
      const parseList = [];
      value.map((data) => {
        parseList.push({
          value: data.name,
          id: data.id,
        })
      } )
      return parseList;
    },
  
  };
  