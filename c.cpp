// A - Hello World

#include<iostream>
using namespace std;
int main(){
    cout<<"Hello World";
}


// B - Print First 5 Alphabets
/*Your task is to print the first five letters of the English alphabet.

Input
There is no input for this problem.

Output
Print the first five uppercase English letters, one per line.

Example
InputCopy
There is no input.
OutputCopy
A
B
C
D
E*/
#include<iostream>
using namespace std;
int main(){
    cout<<"A" <<endl;
    cout<<"B"<<endl;
    cout<<"C"<<endl;
    cout<<"D"<<endl;
    cout<<"E"<<endl;
}


// C - Triangle
/*Your task is to print a right-angled triangle pattern using asterisks (*).

Input
There is no input for this problem.

Output
Print the following pattern exactly as shown:


*****
****
***
**
**/
#include <iostream>
using namespace std;
int main()
{
    cout << "*****" << endl;
    cout << "****" << endl;
    cout << "***" << endl;
    cout << "**" << endl;
    cout << "*" << endl;
}

// D - Print Z
/*Your task is to print the letter Z using asterisks (*) as shown below.

Input
There is no input for this problem.

Output
Print the following pattern exactly as shown:


*****
   *
  *
 *
*****
*/
#include <iostream>
using namespace std;
int main()
{
    cout << "*****" << endl;
    cout << "   *" << endl;
    cout << "  *" << endl;
    cout << " *" << endl;
    cout << "*****" << endl;
}

/*
E. Print Table of 5
Your task is to print the multiplication table of the 5.

Input
There is no input for this problem.

Output
Print the table of 5 in the format as shown in the example.

Example
InputCopy
There is no input.
OutputCopy
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50*/

#include <iostream>
using namespace std;
int main()
{
    cout << 5 * 1 << endl;
    cout << 5 * 2 << endl;
    cout << 5 * 3 << endl;
    cout << 5 * 4 << endl;
    cout << 5 * 5 << endl;
    cout << 5 * 6 << endl;
    cout << 5 * 7 << endl;
    cout << 5 * 8 << endl;
    cout << 5 * 9 << endl;
    cout << 5 * 10 << endl;
}

#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        cout << "5 * " << i << " = " << 5 * i << endl;
    }
    return 0;
}

/*
F. Rectangle
You are given the length and breadth of a rectangle. Your task is to calculate its area and perimeter.

The formulas are:

Area =
 length ×
 breadth
Perimeter =
 2×(length+breadth)
Input
A single line containing two integers length and breadth (1≤length,breadth≤1000)
.

Output
You are given the length and breadth of a rectangle. Your task is to calculate its area and perimeter.

The formulas are:

Area =
 length ×
 breadth
Perimeter =
 2×(length+breadth)
Example
InputCopy
5 7
OutputCopy
Area = 35
Perimeter = 24



*/


#include<iostream>
using namespace std;
int main(){
    int length=5;
    int breadth=7;
    cin>>length>>breadth;
    cout<<"Area = "<<length*breadth <<endl;
    cout<<"Perimeter = "<<2*(length+breadth)<<endl;
}
/*
G - Print Table of N
Input
A single integer N
 (1≤N≤100)
.

Output
Print the table of N
 in the format shown in the example below.

Example
InputCopy
6
OutputCopy
6 * 1 = 6
6 * 2 = 12
6 * 3 = 18
6 * 4 = 24
6 * 5 = 30
6 * 6 = 36
6 * 7 = 42
6 * 8 = 48
6 * 9 = 54
6 * 10 = 60
*/
#include <iostream>
using namespace std;

int main() {
    int N;
    cin >> N;

    for(int i = 1; i <= 10; i++) {
        cout << N << " * " << i << " = " << N * i << endl;
    }

    return 0;
}


/*You are given two integers N
 and M
. Your task is to compute and print the results of the following operations:

N+M
N−M
N×M
N÷M
 (integer division)
NmodM
Input
A single line containing two integers N
 and M
 (1≤N,M≤1000)
.

Output
Print five lines in the format as shown in the example.

Example
Input
6 4
Output
6 + 4 = 10
6 - 4 = 2
6 * 4 = 24
6 / 4 = 1
6 % 4 = 2

*/

#include<iostream>
using namespace std;
int main()
{
int N,M;
cin>>N>>M;
cout<<N<<" + "<<M<<" = "<<(N+M)<<endl;
cout<<N<<" - "<<M<<" = "<<N-M<<endl;
cout<<N<<" * "<<M<<" = "<<N*M<<endl;
cout<<N<<" / "<<M<<" = "<<N/M<<endl;
cout<<N<<" % "<<M<<" = "<<N%M<<endl;
}


/*F. Rectangle
You are given the length and breadth of a rectangle. Your task is to calculate its area and perimeter.

The formulas are:

Area =
 length ×
 breadth
Perimeter =
 2×(length+breadth)
Input
A single line containing two integers length and breadth (1≤length,breadth≤1000)
.

Output
You are given the length and breadth of a rectangle. Your task is to calculate its area and perimeter.

The formulas are:

Area =
 length ×
 breadth
Perimeter =
 2×(length+breadth)
Example
InputCopy
5 7
OutputCopy
Area = 35
Perimeter = 24



*/

#include <iostream>
using namespace std;

int main()
{
    int a,b;
    cin>>a>>b;


    cout<<"Area = " <<a*b<<endl;
    cout<<"Perimeter = " <<2*(a+b)<< endl;



}

/*
H1 - Calculator
You are given two integers N
 and M
. Your task is to compute and print the results of the following operations:

N+M
N−M
N×M
N÷M
 (integer division)
NmodM
Input
A single line containing two integers N
 and M
 (1≤N,M≤1000)
.

Output
Print five lines in the format as shown in the example.

Example
InputCopy
6 4
OutputCopy
6 + 4 = 10
6 - 4 = 2
6 * 4 = 24
6 / 4 = 1
6 % 4 = 2



*/

#include<iostream>
using namespace std;
int main()
{
int N,M;
cin>>N>>M;
cout<<N<<" + "<<M<<" = "<<(N+M)<<endl;
cout<<N<<" - "<<M<<" = "<<N-M<<endl;
cout<<N<<" * "<<M<<" = "<<N*M<<endl;
cout<<N<<" / "<<M<<" = "<<N/M<<endl;
cout<<N<<" % "<<M<<" = "<<N%M<<endl;
}
 