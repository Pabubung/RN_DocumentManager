// import { eventImage } from '../common/constant';
// import moment from 'moment';

module.exports = {
  getEventListData(value) {
    const eventListCurrent = [];
    value.map((data) =>{
      eventListCurrent.push({
        // id: data.id,
        // created_date: data.created_date,
        // nama: data.nama,
        // istansi: data.istansi,
        // jabatan: data.jabatan,
        // email: data.email,
        // hp: data.hp,
        // ttd: data.ttd,
        // photo: data.photo
        date:data.data,
        id:data.id,
        picture_name:data.picture_name,
        picture_source:data.picture_source
      })
    } )
    const eventList = {
      eventListCurrent
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
