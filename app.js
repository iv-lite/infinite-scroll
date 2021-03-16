const container = document.getElementsByClassName('container')[0];
const scrollWidth = container.scrollWidth;
const clientwidth = container.clientWidth;

const isOverTreshold = (scroll) => scroll >= scrollWidth / 2;
const isUnderTreshold = (scroll) => scroll <= scrollWidth / 2;

const append = () => {
    if(isUnderTreshold(container.scrollLeft))
        return;

    const childrens = container.querySelectorAll('div');
    const childs = [...childrens].slice(0, childrens.length / 2);

    requestAnimationFrame(() => {
        for (const children of childs) {
            children.remove();
            container.append(children);
        }
        container.scrollLeft = 0;
    });
};

const prepend = () => {
    if(isOverTreshold(container.scrollLeft))
        return;

    console.log('prepending');
};

if(isUnderTreshold(container.scrollLeft))
    container.addEventListener('scroll', append);
else
    container.addEventListener('scroll', prepend);