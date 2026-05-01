// src/utils/math.ts

// A class representing a 2D vector
class Vector2 {
    constructor(public x: number, public y: number) {}

    // Method to add two vectors
    add(vector: Vector2): Vector2 {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }

    // Method to subtract two vectors
    subtract(vector: Vector2): Vector2 {
        return new Vector2(this.x - vector.x, this.y - vector.y);
    }

    // Method to scale the vector by a scalar
    scale(scalar: number): Vector2 {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    // Method to calculate the length of the vector
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    // Method to normalize the vector
    normalize(): Vector2 {
        const len = this.length();
        if (len === 0) return new Vector2(0, 0);
        return new Vector2(this.x / len, this.y / len);
    }
}

// Math utility functions
function lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
}

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

export { Vector2, lerp, clamp };