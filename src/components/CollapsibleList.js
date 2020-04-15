import React, { useState, useRef, useEffect } from "react";
import "./CollapsibleList.css";
import { Link } from "react-router-dom";
import RippleButton from "./RippleButton";

const CollapsibleList = () => {
  return (
    <ul className="collapsible-list-root">
      <Link to="/content/statistic">
        <NormalListItem>Statistic</NormalListItem>
      </Link>
      <Link to="/content/Test">
        <NormalListItem>List Item 2</NormalListItem>
      </Link>
      <CollapsibleListItem label="Pudding Photo">
        <img
          src="https://lh3.googleusercontent.com/VIGix2yHU6VTpOaBYh_eW655s3I_3PIkwzx5m4GgxCfzkFX9sUbA3ZlG5AxRk58tVD8Ajd3_98kYpgpIwcyjBE5R6UNx3BS5jziyKvyNwd6g0me8Pp6bu7YjMqkiSvn_EoMfdJ2LFA=w702-h938-no"
          width="80%"
          alt="Schnauzer"
        />
      </CollapsibleListItem>
      <CollapsibleListItem label="Collapsed List">
        <ul>
          <NormalListItem>Sub Item 1</NormalListItem>
          <NormalListItem>Sub Item 2</NormalListItem>
          <NormalListItem>Sub Item 3</NormalListItem>
        </ul>
      </CollapsibleListItem>
      <NormalListItem>List Item 3</NormalListItem>
    </ul>
  );
};

const NormalListItem = props => {
  const { style, children } = props;

  return (
    <li className="normal-list-item" style={style}>
      <RippleButton>{children}</RippleButton>
    </li>
  );
};

const CollapsibleListItem = props => {
  const { label, children } = props;
  const childRef = useRef(null);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const target = childRef.current;
    if (collapsed) {
      target.style.height = 0;
    } else {
      target.style.height = target.scrollHeight + "px";
    }
  }, [collapsed]);

  return (
    <li className="collapsible normal-list-item">
      <RippleButton onClick={() => setCollapsed(c => !c)}>
        <div className={`label${collapsed ? " collapsed" : ""}`}>
          {label}
          <span className="material-icons">expand_less</span>
        </div>
      </RippleButton>
      <div ref={childRef} className="collapsible-wrapper">
        {children}
      </div>
    </li>
  );
};

export default CollapsibleList;
