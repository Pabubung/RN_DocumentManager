module.exports = {
    getDocumentData(value) {
      const data = [];
      value.data.map(data => {
        data.push({
          id_item: data.id_document,
          date_item: data.date_item,
          type_item: data.type_item,
          name_item: data.name_item,
          additional_information: data.additional_information,
          picture_source: data.picture_source,
          current_location_item: data.current_location_item,
          receiver_item: data.receiver_item,
        });
      });
      const document = {
        data
      };
      return document;
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
  