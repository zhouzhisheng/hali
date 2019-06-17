package com.core.hali.exception;

import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

import cc.ryanc.halo.exception.HaloException;

/**
 * 
 * Base exception of the project.
 * @author zhisheng.zhou
 *
 */
public final class HaloException  extends HaloException{  

	/**
	 * Error errorDate
	 */
	private Object errorDate;
	
	public HaloException(String message) {
        super(message);
    }

    public HaloException(String message, Throwable cause) {
        super(message, cause);
    }

    @NonNull
    public abstract HttpStatus getStatus();

    @Nullable
    public Object getErrorData() {
        return errorData;
    }

    /**
     * Sets error errorData.
     *
     * @param errorData error data
     * @return current exception.
     */
    @NonNull
    public HaloException setErrorData(@Nullable Object errorData) {
        this.errorData = errorData;
        return this;
    }
}
