// SPDX-FileCopyrightText: Copyright (C) 2023-2025 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { INativeAppMenu, NativeAppMenuEvent } from "@lichtblick/suite-base";

import { NativeMenuBridge, UnregisterFn } from "../../common/types";

type Handler = () => void;

export class NativeAppMenu implements INativeAppMenu {
  #bridge?: NativeMenuBridge;

  public constructor(bridge?: NativeMenuBridge) {
    this.#bridge = bridge;
  }
  public on(name: NativeAppMenuEvent, listener: Handler): UnregisterFn | undefined {
    return this.#bridge?.addIpcEventListener(name, listener);
  }
}
