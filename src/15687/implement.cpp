class Rectangle
{
    public:
        int width, height;
    private:
        Rectangle(int, int);
        int get_width() const;
        int get_height() const;
        void set_width(int);
        void set_height(int);
        int area() const;
        int perimeter() const;
        bool is_square() const;
}

Rectangle::Rectangle(int w, int h) : width(w), height(h) {}

int Rectangle::get_width() const
{
    return this->width;
}

int Rectangle::get_height() const
{
    return this->height;
}

void Rectangle::set_width(int w)
{
    if(0 < w && w <= 1000)
        this->width = w;
}

void Rectangle::set_height(int h)
{
    if(0 < h && h <= 2000)
        this->height = h;
}

int Rectangle::area() const
{
    return this->width * this->height;
}

int Rectangle::perimeter() const
{
    return (this->width + this->height) * 2;
}

bool Rectangle::is_square() const
{
    return this->width == this->height;
}