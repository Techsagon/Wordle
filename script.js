/*
```scss
@use "sass:string";
$letters: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
@each $i in $letters {
 @for $j from 1 through 5 {
  #w#{$j}_#{$i}:checked ~ #answer #a#{$j}::before {
   content: string.to-upper-case("#{$i}");
  }
 }
 @for $j from 1 through 6 {
  @for $k from 1 through 5 {
   #g#{$j}_#{$k}_#{$i}:checked ~ #letters #l#{$j}_#{$k}::before {
    content: string.to-upper-case("#{$i}");
   }
  }
 }
 #keys [for$="_#{$i}"]::before {
  content: string.to-upper-case("#{$i}");
 }
}
@mixin wrong {
 background: var(--col-wrong);
 border-color: var(--col-wrong);
 color: white;
}
%wrong1 {
  @include wrong;
}
%wrong2 {
  @include wrong;
}
@for $i from 1 through 6 {
 @for $j from 1 through 5 {
  @each $k in $letters {
   [id^="w"][id$="_#{$k}"]:not(:checked) ~ [id^="w"][id$="_#{$k}"]:not(:checked) ~ [id^="w"][id$="_#{$k}"]:not(:checked) ~ [id^="w"][id$="_#{$k}"]:not(:checked) ~ [id^="w"][id$="_#{$k}"]:not(:checked) ~ [id="g#{$i}_#{$j}_#{$j}"]:checked ~ [id^="g#{$i}-"]:checked ~ #letters #l#{$i}_#{$j} {
    @extend %wrong1;
   }
  }
 }
}
@each $i in $letters {
 [id^="w"][id$="_#{$i}"]:not(:checked) ~ [id^="w"][id$="_#{$i}"]:not(:checked) ~ [id^="w"][id$="_#{$i}"]:not(:checked) ~ [id^="w"][id$="_#{$i}"]:not(:checked) ~ [id^="w"][id$="_#{$i}"]:not(:checked) ~ [id^="g"][id$="_#{$i}"]:checked ~ .g:checked ~ #keys [for$="_#{$i}"] {
  @extend %wrong2;
 }
}
@mixin place {
 background: var(--col-place);
 border-color: var(--col-place);
 color: white;
}
%place1 {
  @include place;
}
%place2 {
  @include place;
}
@for $i from 1 through 6 {
 @for $j from 1 through 5 {
  @each $k in $letters {
   [id^="w"][id$="_#{$i}"]:checked ~ [id="g#{$i}_#{$j}_#{$k}"]:checked ~ [id^="g#{$i}-"]:checked ~ #letters [id="l#{$i}_#{$j}"] {
    @extend %place1;
   }
  }
 }
}
@each $i in $letters {
 [id^="w"][id$="_#{$i}"]:checked ~ [id^="g"][id$="_#{$i}"]:checked ~ .g:checked ~ #keys [for$="_#{$i}"] {
    @extend %place2;
 }
}
@mixin right {
 background: var(--col-right);
 border-color: var(--col-right);
 color: white;
}
%right1 {
  @include right;
}
%right2 {
  @include right;
}
%right3 {
  @include right;
}
%right4 {
  @include right;
}
%right5 {
  @include right;
}
%right6 {
  @include right;
}
%right7 {
  @include right;
}
@for $i from 1 through 5 {
 @each $j in $letters {
  #w#{$i}_#{$j}:checked ~ [id="g1_#{$i}_#{$j}"]:checked ~ [id^="g1-"]:checked ~ #letters #l1_#{$i} {
   @extend %right1;
  }
 }
}
@for $i from 1 through 5 {
 @each $j in $letters {
  #w#{$i}_#{$j}:checked ~ [id="g2_#{$i}_#{$j}"]:checked ~ [id^="g2-"]:checked ~ #letters #l2_#{$i} {
   @extend %right2;
  }
 }
}
@for $i from 1 through 5 {
 @each $j in $letters {
  #w#{$i}_#{$j}:checked ~ [id="g3_#{$i}_#{$j}"]:checked ~ [id^="g3-"]:checked ~ #letters #l3_#{$i} {
   @extend %right3;
  }
 }
}
@for $i from 1 through 5 {
 @each $j in $letters {
  #w#{$i}_#{$j}:checked ~ [id="g4_#{$i}_#{$j}"]:checked ~ [id^="g4-"]:checked ~ #letters #l4_#{$i} {
   @extend %right4;
  }
 }
}
@for $i from 1 through 5 {
 @each $j in $letters {
  #w#{$i}_#{$j}:checked ~ [id="g5_#{$i}_#{$j}"]:checked ~ [id^="g5-"]:checked ~ #letters #l5_#{$i} {
   @extend %right5;
  }
 }
}
@for $i from 1 through 5 {
 @each $j in $letters {
  #w#{$i}_#{$j}:checked ~ [id="g6_#{$i}_#{$j}"]:checked ~ [id^="g6-"]:checked ~ #letters #l6_#{$i} {
   @extend %right6;
  }
 }
}
@for $i from 1 through 5 {
 @each $j in $letters {
  #w#{$i}_#{$j}:checked ~ [id$="_#{$i}_#{$j}"]:checked ~ .g:checked ~ #keys [for$="_#{$j}"] {
   @extend %right7;
  }
 }
}
@for $i from 1 through 6 {
 @each $j in $letters {
  #w1_#{$j}:checked ~ #g#{$i}_1_#{$j}:checked ~ #keys [for="g#{$i}-win"] {
   display: block;
  }
 }
}
@for $i from 1 through 6 {
 @each $j in $letters {
  #w2_#{$j}:checked ~ #g#{$i}_2_#{$j}:checked ~ #keys [for="g#{$i}-win"] {
   visibility: visible;
  }
 }
}
@for $i from 1 through 6 {
 @each $j in $letters {
  #w3_#{$j}:checked ~ #g#{$i}_3_#{$j}:checked ~ #keys [for="g#{$i}-win"] {
   opacity: 1;
  }
 }
}
@for $i from 1 through 6 {
 @each $j in $letters {
  #w4_#{$j}:checked ~ #g#{$i}_4_#{$j}:checked ~ #keys [for="g#{$i}-win"] {
   left: 0;
  }
 }
}
@for $i from 1 through 6 {
 @each $j in $letters {
  #w5_#{$j}:checked ~ #g#{$i}_5_#{$j}:checked ~ #keys [for="g#{$i}-win"] {
   top: 0;
  }
 }
}
```
*/