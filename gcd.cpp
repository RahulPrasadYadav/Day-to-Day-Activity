#include<bits/stdc++.h>
using namespace std;

 void printgcd(int a,int b){
      while(a>0 && b>0){
           if(a>b){
              a=a%b;

           }else{
              b=b%a;

           }
      }
      if(a==0){
          cout<<b<<endl;

      }
      else{
          cout<<a<<endl;
          
      }
       
 }

int main(){
    int a,b;
     cin>>a>>b;

     printgcd(a,b);

      





     return 0;

}