/*Edwin Bishop's Guitar Tuner
This program provides visual assistance to help the user tune his or her  guitar to the standard tuning.
*/
import javax.sound.sampled.*;
import java.util.*; 
public class Tuner {
	public static void main(String [] args) {
			System.out.println("Please Strum The Chord You Would Like To Tune");		
			TargetDataLine line;
			DataLine.Info info = new DataLine.Info(TargetDataLine.class, 
    			format); // format is an AudioFormat object
			if (!AudioSystem.isLineSupported(info)) {
    				System.out.print("OOPS!!!"); 

			}

			try {
    				line = (TargetDataLine) AudioSystem.getLine(info);
    				line.open(format);
			} catch (LineUnavailableException ex) {
  	
			}
	}
 	
	
	
} 