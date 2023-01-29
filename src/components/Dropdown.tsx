import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useKeyPress } from "../hooks/useKeyPress";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { Alignment } from "../domain/alignment";
import { getModifierClass } from "../util/css";

interface DropdownProps {
  label: JSX.Element | string;
  align?: Alignment;
}

function Dropdown(props: PropsWithChildren<DropdownProps>) {
  const { label, children, align = "left" } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(
    (toggle: boolean) => {
      if (toggle === isOpen) return;

      if (toggle) {
        setIsOpen(true);
      } else {
        setIsClosing(true);
        setIsOpen(false);

        setTimeout(() => {
          setIsClosing(false);
        }, 150);
      }
    },
    [isOpen]
  );

  const isEscPressed = useKeyPress("Escape");
  useEffect(() => {
    if (isEscPressed && isOpen) toggleDropdown(false);
  }, [isEscPressed, isOpen, toggleDropdown]);

  useOnClickOutside(dropdownRef, () => isOpen && toggleDropdown(false));

  return (
    <div
      ref={dropdownRef}
      className={`c-dropdown ${getModifierClass("c-dropdown", [align])}
        ${isOpen ? "is-open" : ""} 
        ${isClosing ? "is-closing" : ""}
      `}
    >
      <button
        className="c-dropdown__button"
        onClick={() => toggleDropdown(!isOpen)}
      >
        {label}
      </button>

      <div className="c-dropdown__content">{children}</div>
    </div>
  );
}

export default Dropdown;
