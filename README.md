# designSystem

## benefits
  - productivity
  - consistency
  - scalability
  - maintainability
  - gets everyone on the same page
  - allow room for innovation and growth 
  
- https://www.nngroup.com/articles/design-systems-101/
- https://www.baianat.com/books/merits-of-design-systems/design-systems-and-their-benefits


---
Required changes
---
### Designs
- At least 3 screen resolutions including mobile
- 

### Development  
- upgrade/update in angular (typescript)
- upgrade/update database
- unit tests 

### Work balance
- code reviews
- more robust sprints
- hot bug fix? 

## CSS - class system

``` html
<body class='d-fx jc-c'>
  <div class='container d-fx jc-sa ai-c br-6p m-0p p-5p'>
    <div class='box br-6p b-1a1'></div>
    <div class='box br-6p b-1d1'></div>
  </div>
</body>
```

``` css
:root {
  --divider-lines-1: orange;
  --accent-1: blue;
}

/* ===== Position ===== */
.p-r {
  position: relative;
}
.p-a {
  position: absolute;
}
.p-f {
  position: fixed;
}

/* ===== Display ===== */
.d-fx {
  display: flex;
}
.d-ilfx {
  display: inline-flex;
}
.d-bl {
  display: block;
}
.d-ibl {
  display: inline-block;
}
.d-n {
  display: none;
}

/* ====== Flex ====== */
.fd-c{
  flex-direction: column;
}
.ai-c {
  align-items: center;
}
.ai-fs {
  align-items: flex-start;
}
.ai-fe {
  align-items: flex-end;
}
.jc-c {
  justify-content: center;
}
.jc-sa {
  justify-content: space-around;
}
.jc-se {
  justify-content: space-evenly;
}
.fc-sb {
  justify-content: space-between;
}
.jc-fs {
  justify-content: flex-start;
}
.jc-fe {
  justify-content: flex-end;
}

/*  ===== Padding ===== */
.p-0p {
  padding: 0px;
}
.p-5p {
  padding: 5px;
}

/*  ======== Border ======= */
.b-1d1 {
  border: 1px solid var(--divider-lines-1);
}
.b-1a1 {
  border: 1px solid var(--accent-1);
}

/*  ===== Border Radius ===== */
.br-1p {
  border-radius: 1px;
}
.br-2p {
  border-radius: 2px;
}
.br-3p {
  border-radius: 3px;
}
.br-5p {
  border-radius: 5px;
}
.br-6p {
  border-radius: 6px;
}
.br-50pc {
  border-radius: 50%;
}

/*  ===== Margin ===== */
.m-0p {
  margin: 0px;
}
```




