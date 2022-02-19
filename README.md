Check me out live at. Please wait 30 seconds or so for me to load
stodgy-biscuits.surge.sh

In this assignment, you'll create an HSL(a) color picker with React.

First, a little bit of color theory...
On the web, and computers in general, we often think of colors using the RGB color model. In HTML and CSS, we often use hexadecimal triplets to describe colors in RGB. For example, #76BCBB represents a nice shade of blue: . 76 is the red component, BC for green, and BB for blue. Those hexadecimal numbers translate, respectively, to 118, 188, 187 in decimal. The range for each color is 0 through 255.

In this model, the three additive primary colors (red, green, and blue) are combined to create colors. The absence of these colors creates black, while all three colors at full strength combine to create white. In hexadecimal, FF represent the decimal value 255. This helps to explain why #FFFFFF represents white. We can also use other notations in CSS to specify colors, such as rgb(118, 188, 187), where the decimal values are given.

RGB isn't the only way we can use numbers to represent colors; there exists many color models, some with specialized purposes, such as CMYK a subtractive model used in printing. In many color models the relationship between the color components isn't always evident in any meaningful way, especially if you're trying to combine them to find a specific color. Try looking for that perfect shade of blue on an RGB color picker, you will probably find it to be a little counter-intuitive. Some color models are easy to reason about, such as HSL (hue, saturation, lightness) and HSB (hue, saturation, brightness). Like RGB, CSS supports defining colors in HSL:
