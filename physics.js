/*
Isaac Newton has forgotten his laws of physics and needs your help to animate an object on his game.

He must use the Second Law of Motion that states, "when the forces acting on an object are unbalanced, the object will accelerate."

This acceleration is dependent upon the force that acts upon the object and the object's mass.

So he wants to know what the acceleration of that object is, depending on its properties:

    mass of xx
    Δv of xx
    Δt of xx
    force of xx
    distance xx
    time xx

Create a function named getAcceleration that calculates the acceleration of a given object. For example:

{
  f: 10,
  m: 5,
  Δv: 100,
  Δt: 50,
  t:1,
  d: 10
}

If it is not possible to calculate it, it must return the string "impossible".

Formulas

a = F/m (acceleration from force and mass)
a = Δv/Δt (acceleration from change in velocity over time)
a = 2d/t^2 (acceleration from distance and time)

a = acceleration
m = mass
F = force
Δv = final velocity - initial velocity
Δt = final time - initial time
d = distance
t = time

Quote

"Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things."

Isaac Newton
*/

function getAcceleration({ f, m, Δv, Δt, t, d }) {
    // calc acceleration using force and mass
    if (f !== undefined && m !== undefined && m !== 0) {
        return f / m
    }
    // calc acceleration using change in velocity and change in time
    if (Δv !== undefined && Δt !== undefined && Δt !== 0) {
        return Δv / Δt
    }
    // calc acceleration using distance and time
    if (d !== undefined && t !== undefined && t !== 0) {
        return (2 * d) / (t * t)
    }
    return "impossible"
}
console.log(getAcceleration({ f: 10, m: 5 }));
console.log(getAcceleration({ Δv: 100, Δt: 50 }));
console.log(getAcceleration({ d: 10, t: 1 }));
console.log(getAcceleration({})); 