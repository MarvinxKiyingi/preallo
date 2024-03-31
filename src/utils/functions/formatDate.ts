export const formatDate = () => {
  var date = new Date();
  var day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  var month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  var year = date.getFullYear();

  // Create the desired string format
  var dateString = `${day}/${month}/${year}`;

  return dateString;
};
