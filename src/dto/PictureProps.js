
class PictureProps {
    constructor(src, name, description, legend = "Original Oil Painting, 28x35.6 cm with depth 1.5 cm.\n" +
    "        Surface: High Quality Professional Oil Paint on gallery-grade, deep edge cotton canvas, with the painting wrapping around the sides.\n" +
    "        Finish: Varnished. Dated on the back side. Edges painted and ready to be framed or just to hang without frame.") {
        this.src = src;
        this.name = name;
        this.description = description;
        this.legend = legend;
    }
}

export default PictureProps;
