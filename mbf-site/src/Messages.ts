import { Mod } from "./Models";

type Request = GetModStatus | Patch;

interface GetModStatus {
    type: 'GetModStatus'
}

interface Patch {
    type: 'Patch'
}

type Response = ModStatus;

interface ModStatus {
    type: 'ModStatus',
    app_info: AppInfo | null,
    core_mods: CoreModsInfo | null,
    modloader_present: boolean,
    installed_mods: Mod[]
}

interface CoreModsInfo {
    supported_versions: string[],
    all_core_mods_installed: boolean
}

interface AppInfo {
    version: string,
    is_modded: boolean
}

export type {
    Request,
    GetModStatus,
    Response,
    ModStatus,
    AppInfo,
    CoreModsInfo
}