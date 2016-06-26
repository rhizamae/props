var TAG = '[PageController]';

module.exports = {
  dashboard: function(req, res) {
    var ACTION = '[dashboard]';
    res.view('pages/dashboard', {});
  },

  users: function(req, res) {
    var ACTION = '[users]';
    res.view('pages/users', {});
  },

  viral: function(req, res) {
    var ACTION = '[viral]';
    res.view('pages/viral', {});
  },

  analytics: function(req, res) {
    res.view('pages/analytics', {});
  },

}