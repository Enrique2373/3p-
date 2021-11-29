//graph4stu.js

// ds
var  f = { }

// nodos
deja que  alice = { la : { } }
deja que  cinthia = { lc : { } }
deje  bob = { lb : { } }

// in2ds
f . alice = alice
f . cinthia = cinthia
f . bob = bob

//Enlaces
deja que  la = { cinthia , bob }
deja  lc = { bob }
deje  lb = { cinthia }

// in2ds
f . Alice . la = la
f . cinthia . lc = lc
f . bob . lb = lb