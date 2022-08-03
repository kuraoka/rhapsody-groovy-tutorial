import com.telelogic.rhapsody.core.*

class ShowNameOfSelectedElement {
	static main(args) {
		IRPApplication app = RhapsodyAppServer.getActiveRhapsodyApplication();
		IRPModelElement se = app.getSelectedElement();
		if (null != se) {
			System.out.println(se.getName());
		}
	}
}
