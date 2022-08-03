import com.telelogic.rhapsody.core._

object ShowNameOfSelectedElement extends App {
	val ra = RhapsodyAppServer.getActiveRhapsodyApplication()
	val se = ra.getSelectedElement()
	if (null != se) {
		printf("%s\n", se.getName())
	}
}