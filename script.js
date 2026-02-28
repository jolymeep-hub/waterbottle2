body { margin:0; font-family: Arial, sans-serif; }
model-viewer { width:100vw; height:100vh; background:#fff; }

/* simple bar */
.bar{
  position:fixed; top:10px; left:10px; z-index:9999;
  background:#fff; border:1px solid #ccc; padding:10px;
}
button{ margin:3px; padding:6px 10px; cursor:pointer; }
#status{ margin-top:6px; font-size:12px; color:#333; }

/* ---- HOTSPOTS ---- */
/* Keep hotspot positioned, but make the "dot" invisible */
.Hotspot{
  background: transparent;
  border: none;
  padding: 0;
  width: 28px;          /* hover hitbox */
  height: 28px;
  cursor: pointer;

  /* hide the dot itself */
  opacity: 0;
}

/* show the label only when hovering the hotspot */
.HotspotAnnotation{
  display:none;
  background:#111;
  color:#fff;
  padding:6px 12px;
  border-radius:4px;
  font-size:14px;
  white-space:nowrap;

  transform: translate(18px, -10px);
}

/* when hovering the hotspot area, show label */
.Hotspot:hover{
  opacity: 1; /* allows hover to register reliably */
}
.Hotspot:hover .HotspotAnnotation{
  display:block;
}