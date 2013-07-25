# ghastly

A lightweight jQuery modal

### Use

* Add jQuery and ghastly.js to your html file
* Configure your anchor tags like this:

```
<a rel="modal" href="#test">Click</a>
```

* Configure your modal content like this:

```
<p id="test" style="display:none;">I'm a modal</p>
```

* Note that the `href` attribute in the `a` tag matches the `id` of the modal content. Also, by default, the modal will appear and the content will overlay "as is". This means that you must add something such as...

```
.ghastly {
    background: white;
    padding: 10px;
    border-radius: 5px;
}
```

...to your css file and adjust the modal content class accordingly.
