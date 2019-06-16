package com.core.hali.exception;

import io.undertow.util.BadRequestException;

/**
 * Exception caused by entity existence already.
 * @author zhisheng.zhou
 *
 */
public class AlreadyExistsException extends BadRequestException {

	 public AlreadyExistsException(String message) {
	        super(message);
	    }

	    public AlreadyExistsException(String message, Throwable cause) {
	        super(message, cause);
	    }
	  
}
