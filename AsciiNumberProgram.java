//In java each special character has a numeric value is referred to ascii number

package logical;

public class AsciiNumberProgram {
	
	public static void main(String[] args) {
		
		for(char ch='A'; ch<='Z'; ch++) {
			
			int n = ch;
			
			System.out.println(ch + " " + n);
			
		}
		
		for(int i= 91; i<=96; i++) {
			
			int n = i;
			
			char ch = (char) n;
			
			System.out.println(ch + " " + n);
			
		}
		
		for(char ch='a'; ch<='z'; ch++) {
			
			int n = ch;
			
			System.out.println(ch + " " + n);
			
		}
		
		for(int i = 123; i<=127; i++) {
			
			int n = i;
			
			char ch = (char) n;
			
			System.out.println(ch + " " + n);
			
		}
		

		
	}

}
