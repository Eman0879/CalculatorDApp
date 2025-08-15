// SPDX−Li c e n s e−I d e n t i f i e r : MIT
pragma s o l i d i t y ˆ 0 . 8 . 0 ;
c o n t r a c t C al c ul a t o r {
i n t 2 5 6 p u bli c r e s u l t ;
f u n c ti o n add ( i n t 2 5 6 a , i n t 2 5 6 b ) p u bli c r e t u r n s ( i n t 2 5 6 ) {
r e s u l t = a + b ;
r e t u r n r e s u l t ;
}
f u n c ti o n s u b t r a c t ( i n t 2 5 6 a , i n t 2 5 6 b ) p u bli c r e t u r n s ( i n t 2 5 6 ) {
r e s u l t = a − b ;
r e t u r n r e s u l t ;
}
f u n c ti o n m ul ti pl y ( i n t 2 5 6 a , i n t 2 5 6 b ) p u bli c r e t u r n s ( i n t 2 5 6 ) {
r e s u l t = a ∗ b ;
r e t u r n r e s u l t ;
}
f u n c ti o n di vi d e ( i n t 2 5 6 a , i n t 2 5 6 b ) p u bli c r e t u r n s ( i n t 2 5 6 ) {
r e q u i r e ( b != 0 , ”Cannot di vi d e by z e r o ” ) ;
r e s u l t = a / b ;
r e t u r n r e s u l t ;
}
}