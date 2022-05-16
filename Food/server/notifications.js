const FCM = require('fcm-node')
const serverKey =
  'AAAA4TNkSeI:APA91bFVro-zF3eIp_uhWkYdD6MrJfdKNYynEYbkJvLSJp7t_GF4GR8jxm1PZ-fIvu1WBLP6Cb9PMsz6EqyRapbEPDzgp3ES4KUCnPB01Zy_QGn_j4AnjTeFlh47WmLY6lZ5NO8Ad714'
const fcm = new FCM(serverKey)

function sendFCM(title, body, callback) {
  const message = {
    //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: 'dnQzbSxJR6WEx0l-dkmNeL:APA91bGox1WR_V5CwrosaaI1d4aQQc9NL5H84sZsl8c9xB1FTomoFcDLwT9ahpvaZ5VOeJ5eB7y-QpExnG7O2awo6PUsA89wlNhviBAg_A3nouZB7xn_VsOeIhcaep3ROV4UwKFPhznr',
    notification: {
      title,
      body,
    },
  }
  fcm.send(message, function (err, response) {
    callback(err, response)
  })
}

module.exports = {
  sendFCM,
}
