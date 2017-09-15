Ext.define("riznica.samplemodule.personnel.view.PersonnelViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.samplemodule-personnel-view-PersonnelViewController",

  onPersonnelListItemSelected: function(sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function(choice) {
    if (choice === "yes") {

      // some logic
    }
  }
});
