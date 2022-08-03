import com.telelogic.rhapsody.core._

object ShowNameOfSelectedElement extends App {
	val ra: IRPApplication = RhapsodyAppServer.getActiveRhapsodyApplication()
	val se: IRPModelElement = ra.getSelectedElement()
	if (null != se) {
		printf("%s\n", se.getName())
	}
}