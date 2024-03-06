import HTML from "@datkat21/html";
import "./styles.css";
import wallpaper from "./wallpaper.jpg?url";
import textEditorIcon from "./accessories-text-editor.svg?url";

const fontStyles = {
  "Headline/Regular": {
    fontSize: "13px",
    lineHeight: "16px",
    fontWeight: "bold",
  },
  "Body/Emphasized": {
    fontSize: "13px",
    lineHeight: "16px",
    fontWeight: "semibold",
  },
};

const dockIcon = () => {
  return new HTML("mchi-dock-icon")
    .styleJs({
      display: "inline-block",
      width: "50px",
      height: "60px",
      paddingBottom: "10px",
    })
    .append(
      new HTML("mchi-dock-icon-image").styleJs({
        display: "inline-block",
        background: `url(${textEditorIcon})`,
        width: "50px",
        height: "50px",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }),
    );
};

const dockDivider = () => {
  return new HTML("mchi-dock-divider")
    .styleJs({
      display: "inline-block",
      width: "22px",
      height: "65px",
      padding: "4.14px 10.5px 10.16px 10.5px",
    })
    .append(
      new HTML("div").styleJs({
        width: "1px",
        borderRadius: "1px",
        background: "rgba(229, 229, 229, 0.35)",
        height: "45.7px",
      }),
    );
};

const menuBarItem = () => {
  return new HTML("mchi-menu-bar-item").text("Item").styleJs({
    padding: "4px 11px",
    color: "white",
    textShadow: "0 1px 4px rgba(0,0,0,0.2), 0 36px 100px rgba(0,0,0,0.7)",
    borderRadius: "4px",
    ...fontStyles["Body/Emphasized"],
  });
};

new HTML("mchi-desktop")
  .styleJs({
    position: "fixed",
    display: "inline-block",
    background: `url(${wallpaper})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  })
  .appendTo(document.body);

new HTML("mchi-dock")
  .styleJs({
    position: "fixed",
    minWidth: "65px",
    height: "65px",
    boxShadow: "0 0 0 1px rgba(0,0,0,0.4)",
    borderRadius: "16px",
    background: "rgba(74,74,74,0.39)",
    backdropFilter: "blur(30px)",
    border: "1px solid rgba(229, 229, 229, 0.35)",
    zIndex: "2",
    bottom: "5px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "5px 5px 0px 5px",
    display: "flex",
  })
  .appendMany(
    new HTML("mchi-dock-icon-container")
      .styleJs({
        display: "flex",
        gap: "7px",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      })
      .appendMany(
        dockIcon(),
        dockIcon(),
        dockIcon(),
        dockIcon(),
        dockIcon(),
        dockIcon(),
        dockIcon(),
        dockIcon(),
        dockIcon(),
      ),
    dockDivider(),
    new HTML("mchi-dock-icon-container")
      .styleJs({
        display: "flex",
        gap: "7px",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      })
      .appendMany(dockIcon(), dockIcon(), dockIcon()),
    dockDivider(),
    new HTML("mchi-dock-icon-container")
      .styleJs({
        display: "flex",
        gap: "7px",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      })
      .appendMany(dockIcon(), dockIcon(), dockIcon()),
  )
  .appendTo(document.body);

new HTML("mchi-menu-bar")
  .styleJs({
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",
    height: "24px",
    zIndex: "2",
    background: "rgba(0,0,0,0.18)",
    backdropFilter: "blur(50px)",
    display: "flex",
    gap: "-2px",
  })
  .appendMany(
    new HTML("mchi-menu-bar-leading")
      .styleJs({
        marginLeft: "4px",
        display: "flex",
      })
      .appendMany(
        new HTML("mchi-menu-bar-item").text("").styleJs({
          padding: "2px 11px",
          color: "white",
          textShadow: "0 1px 4px rgba(0,0,0,0.2), 0 36px 100px rgba(0,0,0,0.7)",
          fontSize: "16.5px",
          borderRadius: "4px",
          lineHeight: "20px",
        }),
        new HTML("mchi-menu-bar-item").text("App Name").styleJs({
          padding: "4px 11px",
          color: "white",
          textShadow: "0 1px 4px rgba(0,0,0,0.2), 0 36px 100px rgba(0,0,0,0.7)",
          borderRadius: "4px",
          ...fontStyles["Headline/Regular"],
        }),
        menuBarItem(),
        menuBarItem(),
        menuBarItem(),
        menuBarItem(),
        menuBarItem(),
        menuBarItem(),
        menuBarItem(),
      ),
    new HTML("mchi-fill-flex"),
    new HTML("mchi-menu-bar-trailing")
      .styleJs({
        marginRight: "8px",
        display: "flex",
        gap: "-2px",
      })
      .appendMany(
        menuBarItem().text("􀙇").styleJs({ textShadow: "none" }),
        menuBarItem().text("􀊫").styleJs({ textShadow: "none" }),
        menuBarItem().text("􀉭").styleJs({ textShadow: "none" }),
        menuBarItem().text("􀜊").styleJs({ textShadow: "none" }),
        menuBarItem().text("Mon Jun 5 9:41 AM"),
      ),
  )
  .appendTo(document.body);
