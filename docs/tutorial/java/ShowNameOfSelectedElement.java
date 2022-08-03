import com.telelogic.rhapsody.core.*;

public class ShowNameOfSelectedElement {
	public static void main(String[] args) {
		IRPApplication app = RhapsodyAppServer.getActiveRhapsodyApplication();
		IRPModelElement se = app.getSelectedElement();
		if (null != se) {
			System.out.println(se.getName());
		}
	}
}