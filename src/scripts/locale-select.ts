enum ClassNames {
  SELECT = 'txs-select',
  VALUE = 'txs-select-value',
  OPTIONS = 'txs-select-options',
  OPTION = 'txs-select-option',
}

interface LocaleSelectProps {
  id: string;
  value?: string;
  onChange: (value: string) => void;
  onKeyDown: () => string;
}

export function localeSelect({ id, onChange, onKeyDown, value }: LocaleSelectProps) {
  let isOpen = false;

  const element = document.getElementById(id);
  if (!element) {
    console.error(`LocaleSelect: Element with id ${id} not found`);
    return;
  }

  const valueElement = element.querySelector(`.${ClassNames.VALUE}`) as HTMLElement;

  if (!valueElement) {
    console.error(`LocaleSelect: Element with class ${ClassNames.VALUE} not found`);
    return;
  }

  const setValue = (val: string) => {
    const option = element.querySelector(`[data-value=${val}]`) as HTMLElement;
    if (!option) {
      console.error(`LocaleSelect: Option element with value ${val} not found`);
      return;
    }

    valueElement.dataset.value = option.dataset.value;
    valueElement.innerHTML = option.innerHTML;
  };

  const setIsOpen = (state: boolean) => {
    isOpen = state;
    element.classList[state ? 'add' : 'remove']('is-open');
  };

  const selectedHandle = (elem: HTMLElement) => {
    const val = elem.dataset.value;

    onChange(val);
    setValue(val);
  };

  const clickHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    const select = target.closest(`#${id}`);

    if (!select && !isOpen) {
      return;
    } else if (!select && isOpen) {
      setIsOpen(false);
    } else if (select && select === element && isOpen) {
      if (target.closest(`.${ClassNames.OPTIONS}`)) selectedHandle(target);
      setIsOpen(false);
    } else if (select && select === element && !isOpen) {
      setIsOpen(true);
    }
  };

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const value = onKeyDown();
      setValue(value);
    }
  };

  setValue(value);

  window.addEventListener('click', clickHandler);

  element.addEventListener('keydown', keydownHandler);
}
