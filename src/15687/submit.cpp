class Rectangle {
    private:
        int width, height;
    public:
        Rectangle(int w, int h) : width(w), height(h) {
        }
        int get_width() const {
            return this->width;
        }
        int get_height() const {
            return this->height;
        }
        void set_width(int w) {
            if(0 < w && w <= 1000)
                this->width = w;
        }
        void set_height(int h) {
            if(0 < h && h <= 2000)
                this->height = h;
        }
        int area() const {
            return this->width * this->height;
        }
        int perimeter() const {
            return (this->width + this->height) * 2;
        }
        bool is_square() const {
            return this->width == this->height;
        }
};
