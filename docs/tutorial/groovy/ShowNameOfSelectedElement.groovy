import com.telelogic.rhapsody.core.*

class ShowNameOfSelectedElement {
	static main(args) {
		def app = RhapsodyAppServer.getActiveRhapsodyApplication();
		def se = app.getSelectedElement();
		if (null != se) {
			System.out.println(se.getName());
		}
	}
}
