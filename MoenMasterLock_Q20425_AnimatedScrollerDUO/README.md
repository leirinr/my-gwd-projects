# Scroller Template

### Whats in the box?
1. `index.html` / **Developer Editable**
*(The main GWD unit where you as Developer should add your logic.)*
2. `ps-handlers.js` / **Developer Editable**
*(A template specific file to manage expansion, collapse and dispatched animation events)*
3. `ps-boot.js` / **Not editable by Developer**
*(This is the a core feature file, should be edited by a member of AdProduct team as may have impact on the tile behavior)*

### Listen events of expansion / collapse

In the file `index.html` you should have all functions you're able to use in order to subscribe to the lifecycle events:

| FUNCTION                     | DESCRIPTION                                         |
| ---------------------------- | --------------------------------------------------- |
| `onUnitView`                 | Runs when the unit ad is viewed the first time.     |
| `onFriendlyIframe`           | Runs when the unit ad load on friendly iframe.     |
| `onSafeFrame`                | Runs when the unit ad load on safe frame.     |
| `onCreativeOutOfView`        | Runs when the unit ad is out of the viewport.     |
| `onVisibilityChange`         | Runs when the contents of its tab have become visible or have been hidden.     |
| `onCreativeScroll`           | Run when an element has been scrolled.     |
| `readyForPlugins`            | Run when creative is ready to mount the duo plugin.     |


### Snippet: Run on unit view

```javascript
window.gwd.onUnitView = (container) => {

}
```
### Snippet: Run friendly iframe

```javascript
window.gwd.onFriendlyIframe = (container) => {

}
```
### Snippet: Run safe frame

```javascript
window.gwd.onSafeFrame = (container) => {

}
```
### Snippet: Run on creative is out of viewport

```javascript
window.gwd.onCreativeOutOfView = (container) => {
    
}
```
### Snippet: Run on tab have become visible or have been hidden

```javascript
window.gwd.onVisibilityChange = (visibilityState) => {
    
}
```
### Snippet: Run on tab have become visible or have been hidden

```javascript
window.gwd.onCreativeScroll = (percentage) => {
    
}
```