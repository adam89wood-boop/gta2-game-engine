// Tilemap rendering system

export class TileMap {
    private tileData: number[][];
    private tileSize: number;

    constructor(tileData: number[][], tileSize: number) {
        this.tileData = tileData;
        this.tileSize = tileSize;
    }

    public render(context: CanvasRenderingContext2D): void {
        for (let row = 0; row < this.tileData.length; row++) {
            for (let col = 0; col < this.tileData[row].length; col++) {
                const tile = this.tileData[row][col];
                this.drawTile(context, tile, col, row);
            }
        }
    }

    private drawTile(context: CanvasRenderingContext2D, tile: number, col: number, row: number): void {
        // Logic to draw individual tile based on its value
        // Placeholder for actual drawing code, e.g., using context.drawImage()
        
        // Example: Fill rectangle for now
        context.fillStyle = `rgb(${tile * 10}, ${tile * 10}, ${tile * 10})`;
        context.fillRect(col * this.tileSize, row * this.tileSize, this.tileSize, this.tileSize);
    }
}