Toast = {
  success: function (message){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '保存成功!',
      showConfirmButton: false,
      timer: 3000
    })
  },

  error: function(message){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'message',
      showConfirmButton: false,
      timer: 3000
    })
  },

  warning: function(message){
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'message',
      showConfirmButton: false,
      timer: 3000
    })
  }
};