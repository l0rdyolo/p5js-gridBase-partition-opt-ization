class Grid {
    constructor(cellSize, width, height) {
        this.cellSize = cellSize;
        
        this.cols = Math.ceil(width / cellSize);
        this.rows = Math.ceil(height / cellSize);
        
        this.cells = Array.from({ length: this.cols }, (_, i) => 
            Array.from({ length: this.rows }, (_, j) => 
                new Cell(i, j, cellSize, cellSize)
            )
        );

        
    }

    getCell(x, y) {
        const col = Math.floor(x / this.cellSize);
        const row = Math.floor(y / this.cellSize);
        if (col >= 0 && col < this.cols && row >= 0 && row < this.rows) {
            return this.cells[col][row];
        } else {
            return null;
        }
    }


    draw(){
        this.cells.forEach(row => {
            row.forEach(cell => {
                cell.draw();
            });
        });
    }
}
